import Image from "./Image";

export default function BlogCard({ title, excerpt, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="flex justify-center w-full dark:bg-gray-700 bg-gray-300">
        <Image src={image} alt={title} className="w-fit h-48 object-cover" />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600 text-sm">{excerpt}</p>
        <button className="mt-2 text-pink-600 hover:underline">Read More</button>
      </div>
    </div>
  );
}
