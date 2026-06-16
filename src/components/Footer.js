import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">Voxez</div>
            <ul className="footer-links">
                <li><Link href="/document">Docs</Link></li>
                <li><Link href="https://github.com/parsaasadzadeh">GitHub</Link></li>
                <li><Link href="/terms">terms</Link></li>
            </ul>
            <div className="footer-copy">MIT License</div>
        </footer>
    );
}