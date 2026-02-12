import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "../types/task";
import { useStore } from "../store/useStore";

export default function TaskCard({ task }: { task: Task }) {
  const moveTask = useStore((state) => state.moveTask);
  const deleteTask = useStore((state) => state.deleteTask);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: "transform 150ms ease",
    touchAction: "none",
    opacity: isDragging ? 0.85 : 1,
  };

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const nextStatus = task.status === "todo" ? "inprogress" : "done";
    moveTask(task.id, nextStatus);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-gray-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-grab active:cursor-grabbing"
    >
      <p className="font-medium text-gray-700 mb-4">{task.title}</p>

      <div className="flex justify-between text-sm">
        {task.status !== "done" && (
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={handleMove}
            className="text-indigo-600 hover:underline"
          >
            Move →
          </button>
        )}

        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
