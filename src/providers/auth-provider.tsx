import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { apiUrl } from "@/constraints/api";
import { User } from "@/types";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, removeCookie] = useCookies();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("user_token", { path: "/" });

    setUser(null);

    navigate("/login");
  };

  const fetchUser = async (): Promise<void> => {
    const token = cookies["user_token"];
    if (!token) {
      setLoading(false);
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get<User>(`${apiUrl}/user`, {
        headers: {
          user_token: `${token}`,
        },
      });
      setUser(response.data);
    } catch (error: unknown) {
      console.error("Falha ao buscar dados do usuário:", error);
      toast.error("Falha ao buscar dados do usuário.");
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("cookies", cookies);
    const token = cookies["user_token"];
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
      navigate("/login");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
