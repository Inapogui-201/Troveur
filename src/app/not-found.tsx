import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Page Non Trouvée</h2>
      <p className="mb-6 text-lg">Désolé, la page que vous recherchez n&apos;existe pas.</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-[var(--custom-color)] font-poppins font-medium text-sm text-white rounded hover:bg-[var(--custom-color)]/90 transition"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
