import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <>
            <nav>
                <Link className="nav-logo" href="/">
                    <div className="nav-logo-icon">
                        <Image
                            src="/voxezlogo.png"
                            alt="Voxez Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                    Voxez
                </Link>
                <ul className="nav-links">
                    <li><Link href="/icons">Icons</Link></li>
                    <li><Link href="/document">Document</Link></li>
                    <li><Link href="/install">Install</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </>
    );
}