'use client'

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
    children: JSX.Element
};

const UXModal: React.FC<Props> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false)

    const overlay = useRef<any>();
    const wrapper = useRef<any>();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true)

        return () => {
            setIsMounted(false)
        }
    }, [])

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback((e: any) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) onDismiss();
        }
    }, [onDismiss, overlay, wrapper]);

    const onKeyDown = useCallback((e: any) => {
        if (e.key === "Escape") onDismiss();
    }, [onDismiss]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <>
            <div ref={overlay} className={`${isMounted ? 'open' : 'close'} modal-background`} onClick={onClick}>
                <div className={`${isMounted ? 'open' : 'close'} modal w-[91.6%] md:w-9/12 2xl:w-7/12`} style={{ translate: '-50% -50%' }}>
                    <div ref={wrapper} className="w-full overflow-y-auto" style={{ maxHeight: '90vh' }}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UXModal;