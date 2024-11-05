export async function POST(request) {
    const { username, email, password } = await request.json();
  
    // Walidacja prostych warunków - można dostosować
    if (!username || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }
  
    // Jeśli dane są poprawne, zwracamy sukces (można zastąpić logiką rejestracji użytkownika)
    console.log('Success')
    console.log('Success')
    console.log('Success')
    console.log('Success')
    console.log('Success')
    console.log('Success')
    
    return new Response(JSON.stringify({ message: "Registration successful!" }), { status: 200 });
  }