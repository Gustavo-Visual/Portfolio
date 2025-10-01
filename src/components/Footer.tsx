export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gustavo Carita. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
