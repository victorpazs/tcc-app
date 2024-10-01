export function NoData({ label }: { label?: string }) {
  return (
    <div className="min-w-full min-h-full flex justify-center items-center mt-4">
      <div className="flex flex-col items-center gap-6">
        <img
          onDragStart={(e) => e.preventDefault()}
          src="/no_data.svg"
          alt="no-data"
          className="max-w-40"
        />
        <span className="text-lg text-gray-600">
          {label || "Nenhum dado encontrado"}
        </span>
      </div>
    </div>
  );
}
