import Link from "next/link";
import { DarkModeToggle } from "./dark-mode-toggle";

export default function NavigationMenu() {
    const navigation = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'About',
            href: '/about'
        }
    ]

    return (
        <div className="flex justify-between items-center">
            <div className="container container-xl mx-auto">
                <nav className="flex justify-between items-center py-4">
                    <Link href={`/`}>
                        <p className="text-white text-2xl font-bold"></p>
                    </Link>
                    <ul className="flex justify-between items-center space-x-4">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="text-white">
                            <DarkModeToggle />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}