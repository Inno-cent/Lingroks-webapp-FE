import React from 'react';
import Link from 'next/link';
import style from './MobileMenu.module.scss';
import { FaDollarSign, FaLightbulb } from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';

interface MobileMenuProps {
    menu: boolean;
    onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = () => {
    return (
        <div className={style.mobile__menu}>
                <nav className={style.mobile__nav}>
                    <Link href="/" className={style.mobile__nav_link} aria-label="Subjects"
                    >
                        <FaLightbulb />
                        <span>
                            Features
                        </span>
                    </Link>
                    <Link href="/"
                    className={style.mobile__nav_link} aria-label="exam preps"
                    >
                        <BsPersonBoundingBox />
                        <span>
                            Use cases
                        </span>
                    </Link>
                    <Link href="/" className={style.mobile__nav_link} aria-label="Become a tutor">
                        <FaDollarSign />
                        <span>
                            Pricing
                        </span>
                    </Link>
                </nav>
                <div className={style.mobile__buttons}>
                    <Link href="/auth/login" className={style.mobile__buttons_link}>
                        <button type="button" className={style.mobile__buttons_login}>
                            Login
                        </button>
                    </Link>
                    <Link href="/auth/signup" className={style.mobile__buttons_link}>
                        <button type="button" className={style.mobile__buttons_signup}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default MobileMenu