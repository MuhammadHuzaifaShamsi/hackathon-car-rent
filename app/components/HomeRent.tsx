import { Arrow, Heart, GasStation, Profile2User, CodeCircle, LockCircle, MoreCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeRent() {
  return (
    <>
      <div className="my-10 mx-16">
        {/* SHOWCASE */}
        <div className="flex">
          <div className="bgColor w-[640px] h-[360px] py-6 px-10 mr-5 rounded-2xl">
            <div>
              <h1 className="text-2xl">The Best Platform<br />For Car Rental</h1>
              <p className="my-6">Ease of doing a car rental safetly and <br />reliablely. Ofcourse at a low price!</p>
              <button className="bgBtn py-2 px-3 rounded-sm">Rental Car</button>
            </div>
            <div className="relative -top-16 left-24">
              <Image src="/imgs/koe.png" alt="Image not found" width={400} height={400} />
            </div>
          </div>
          <div className="bgColor w-[640px] h-[360px] py-6 px-10 rounded-2xl">
            <div>
              <h1 className="text-2xl">Easy way to rent a<br />car at a low price.</h1>
              <p className="my-6">Providing cheap car rental services<br />and safe and conformtable facilities.</p>
              <button className="bgBtn py-2 px-3 rounded-sm">Rental Car</button>
            </div>
            <div className="relative -top-24 scale-x-[-1]">
              <Image src="/imgs/gtr.png" alt="Image not found" width={350} height={350} />
            </div>
          </div>
        </div>
        
        <div className="flex my-8 justify-between items-center">
          <div className="w-[582px] h-[132px] bg-white py-5 px-8">
            <div>
              <input type="radio" id="pickUP" />
              <label className="ml-2" htmlFor="pickUP">Pick-Up</label>
            </div>
            <div className="flex justify-between">
              <div className="border-r border-gray-300 pr-5">
                <h2 className="font-bold mt-3">Locations</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your city</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                </select>
              </div>
              <div className="border-r border-gray-300 pr-5">
                <h2 className="font-bold mt-3">Date</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your date</option>
                  <option>today</option>
                  <option>tommorow</option>
                  <option>yesterday</option>
                </select>
              </div>
              <div className="pr-5">
                <h2 className="font-bold mt-3">Time</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your time</option>
                  <option>9 AM</option>
                  <option>10 AM</option>
                  <option>9 PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mx-10 bgBtn p-2 rounded-md">
            <Link className="bgBtn" href="#">
                <Arrow size="18" color="#fff" variant="Bold" />
            </Link>
          </div>
          <div className="w-[582px] h-[132px] bg-white py-5 px-8">
            <div>
              <input type="radio" id="dropOFF" />
              <label className="ml-2" htmlFor="dropOFF">Drop-Off</label>
            </div>
            <div className="flex justify-between">
              <div className="border-r border-gray-300 pr-5">
                <h2 className="font-bold mt-3">Locations</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your city</option>
                  <option>Karachi</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                </select>
              </div>
              <div className="border-r border-gray-300 pr-5">
                <h2 className="font-bold mt-3">Date</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your date</option>
                  <option>today</option>
                  <option>tommorow</option>
                  <option>yesterday</option>
                </select>
              </div>
              <div className="pr-5">
                <h2 className="font-bold mt-3">Time</h2>
                <select className="text-sm text-gray-400">
                  <option defaultChecked>Select your time</option>
                  <option>9 AM</option>
                  <option>10 AM</option>
                  <option>9 PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        {/* Popular Car */}
        <div className="my-10">
          <div className="flex justify-between mb-8">
            <h6 className="text-gray-500">Popular Car</h6>
            <Link className="text-blue-700" href="/">View All</Link>
          </div>
          <div className="grid grid-cols-4 gap-12 ">
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Recommended Car */}
        <div className="my-10">
          <div className="mb-8">
            <h6 className="text-gray-500">Recommandation Car</h6>
          </div>
          <div className="grid grid-cols-4 gap-12 ">
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Koenigsegg</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Bold" />
                </div>
              </div>
              <div className="flex justify-center my-8">
                <Image src="/imgs/koe.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">90L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <p className="text-lg font-bold">$99.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                  <button className="bgBtn py-1 px-2 rounded-lg">Rent Now</button>
                </div>
              </div>
            </div>
            <div className="w-[274px] h-[322px] bg-white py-4 px-8">
              <div className="flex justify-between items-center">
                <div>
                  <h3>Nissan GT-R</h3>
                  <h6 className="text-gray-500">Sport</h6>
                </div>
                <div>
                  <Heart size="18" color="#d91e1e" variant="Linear" />
                </div>
              </div>
              <div className="flex justify-center">
                <Image className="scale-x-[-1]" src="/imgs/gtr.png" width={250} height={250} alt="Image not found" />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="text-[#90A3BF] flex">
                    <GasStation size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">80L</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <MoreCircle size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">Manual</p>
                  </div>
                  <div className="text-[#90A3BF] flex">
                    <Profile2User size="15" color="#90A3BF" variant="Bold" />
                    <p className="ml-1 text-sm">2 People</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-lg font-bold">$80.00/<span className="ml-1 text-xs text-[#90A3BF]">day</span></p>
                    <p className="ml-1 text-xs text-[#90A3BF] line-through">$100.00</p>
                  </div>
                  <button className="bgBtn py-1 px-2 rounded-lg h-fit">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex-1 flex justify-center">
              <button className="bgBtn py-2 px-3 rounded-lg">Show more Car</button>
            </div>
            <div>
              <p className="text-gray-500 text-sm">120 cars</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
