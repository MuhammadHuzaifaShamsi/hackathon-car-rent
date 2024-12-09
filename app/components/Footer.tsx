import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="bg-white pt-16 pb-10 px-9">
                <div className="flex justify-between mb-16">
                    <div>
                        <div>
                            <h1 className="h-color text-xl font-bold">MORENT</h1>
                            <p className="text-sm text-gray-500 mt-4">Our vision is to provide convenience<br />and help increase your sales business.</p>
                        </div>
                    </div>
                    <div className="flex gap-16 mr-10">
                        <div>
                            <h2 className="font-bold mb-6 text-lg">About</h2>
                            <div className="text-gray-500 text-sm flex flex-col gap-3">
                                <Link href={"/"}>How it works</Link>
                                <Link href={"/"}>Featured</Link>
                                <Link href={"/"}>Partnership</Link>
                                <Link href={"/"}>Business Relation</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold mb-6 text-lg">Community</h2>
                            <div className="text-gray-500 text-sm flex flex-col gap-3">
                                <Link href={"/"}>Events</Link>
                                <Link href={"/"}>Blog</Link>
                                <Link href={"/"}>Podcast</Link>
                                <Link href={"/"}>Invite a Friend</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold mb-6 text-lg">Socials</h2>
                            <div className="text-gray-500 text-sm flex flex-col gap-3">
                                <Link href={"/"}>Discord</Link>
                                <Link href={"/"}>Instagram</Link>
                                <Link href={"/"}>Twitter</Link>
                                <Link href={"/"}>Facebook</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="mt-10 flex justify-between">
                    <div>
                        <p className="text-sm font-medium">&copy; 2022 MORENT. All rights reserved</p>
                    </div>
                    <div className="flex gap-6 text-sm font-semibold">
                        <Link href={"/"}>Privacy & Policy</Link>
                        <Link href={"/"}>Terms & Conditions</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
