// app/redirectlearn/page.js
"use client"; // ⚠️ Nie dodawaj tego, jeśli chcesz, aby komponent był serwerowy
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
    const router = useRouter();
    const isAuthenticated = false; // Zakładamy, że użytkownik nie jest zalogowany

    useEffect(() => {
        if (!isAuthenticated) {
            redirect('/register');
        }
    }, [isAuthenticated]);

    return <div>Dashboard</div>;
}

