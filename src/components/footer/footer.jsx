import { useEffect, useState } from 'react';

export function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const isContentShorterThanWindow = scrollHeight <= window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight || isContentShorterThanWindow) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    function handleResize() {
      const isContentShorterThanWindow = document.documentElement.scrollHeight <= window.innerHeight;
      setShowFooter(isContentShorterThanWindow);
    }

    handleResize(); // Verificar inicialmente quando o componente é montado

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!showFooter) {
    return null; // Se a altura do conteúdo for maior que a altura da janela e a rolagem não estiver no final da página, o footer não é renderizado
  }


    return (
        <footer id="footer" className={`bg-dark text-center text-white fixed-bottom ${showFooter ? 'show-footer' : ''}`}>
            <div className="container p-2 pb-0">
                <section className="mb-2">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-google"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              © 2023 Copyright: TinAnimals
            </div>
        </footer>
    )
}