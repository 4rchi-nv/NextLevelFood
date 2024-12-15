import Link from "next/link";

import logoImg from '@/assets/logo.png'

export default function MainHeader() {
    return <header>
        <Link>
        <img src={logoImg.src} />
        </Link>
    </header>
}