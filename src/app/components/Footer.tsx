import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex items-center justify-center sm:justify-start border-t h-28 sm:px-14 text-gray-500">
      <div className="flex items-center justify-center sm:items-end flex-col sm:flex-row">
        <div className="font-bold">
          <Link href="#home">Harshay</Link>
        </div>

        <p className="text-sm sm:border-l sm:mx-2 sm:px-2">
          &copy; 2024 Harshay Narayan. All rights are reserved.
        </p>
      </div>
    </div>
  );
}
