import men from "../assets/images/men.png";
import women from "../assets/images/women.png";
import boys from "../assets/images/boys.png";
import girls from "../assets/images/girls.png";
import kids from "../assets/images/kids.png";

const shades = [
  {
    title: "Men's Fashion",
    image: men,
    bg: "bg-pink-200",
  },
  {
    title: "Women's Fashion",
    image: women,
    bg: "bg-yellow-200",
  },
  {
    title: "Boys Fashion",
    image: boys,
    bg: "bg-gray-200",
  },
  {
    title: "Girls Fashion",
    image: girls,
    bg: "bg-stone-300",
  },
  {
    title: "Kids Fashion",
    image: kids,
    bg: "bg-blue-300",
  },
];

function CategoryBanner() {
  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold text-center">
        Premium Shades
      </h2>

      <div className="mt-12 grid grid-cols-5 gap-6">

        {shades.map((item) => (

          <div
            key={item.title}
            className={`${item.bg} rounded-full h-36 flex items-center justify-between px-8 hover:scale-105 transition`}
          >
            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <button className="text-sm mt-2">
                Click Now →
              </button>
            </div>

            <img
              src={item.image}
              className="h-40 object-contain"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategoryBanner;