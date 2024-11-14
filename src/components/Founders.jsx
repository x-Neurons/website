import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import shahryar from "../assets/shahryar.jpg";
import asad from "../assets/asad.jfif";

const Founders = () => {
  return (
    <div className="mt-20" id="founders">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Founding{" "}
      <span className="bg-gradient-to-r  from-teal-300 to-teal-300 text-transparent bg-clip-text">
          Partners
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div class="w-full max-w-sm dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-teal-200 ">
          <a href="#">
            <img class="p-8 rounded-t-lg h-96 w-80 mx-auto" src={shahryar} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Shahryar Sohail<br /><span className="text-teal-300">Software Engineer</span></h5>
            </a>
          </div>
        </div>
        
        <div class="w-full max-w-sm dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-teal-200">
          <a href="#">
            <img class="p-8 rounded-t-lg h-96 w-80 mx-auto" src={asad} alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Asad Ullah Masood<br /><span className="text-teal-300">Data Scientist</span></h5>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Founders;


