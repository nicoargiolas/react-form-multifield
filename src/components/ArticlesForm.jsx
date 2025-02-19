import { useState } from 'react';

const initialArticles = [
    {
        id: 1,
        titolo: "Come creare un sito web responsive nel 2025",
        autore: "Giovanni Rossi",
        contenuto: "Questo articolo esplora come progettare siti web responsive, adattandoli alle diverse dimensioni dei dispositivi nel 2025.",
        categoria: "Sviluppo web"
    },
    {
        id: 2,
        titolo: "10 consigli per imparare JavaScript più velocemente",
        autore: "Maria Bianchi",
        contenuto: "Impara JavaScript più velocemente con questi 10 consigli pratici che ti aiuteranno a migliorare le tue abilità di programmazione.",
        categoria: "Programmazione"
    },
    {
        id: 3,
        titolo: "Il futuro dell'intelligenza artificiale: cosa aspettarsi",
        autore: "Luca Verdi",
        contenuto: "Un'analisi sulle tendenze future dell'intelligenza artificiale e cosa ci si può aspettare nei prossimi anni.",
        categoria: "Tecnologia"
    },
    {
        id: 4,
        titolo: "I 5 migliori framework CSS da conoscere",
        autore: "Alessandra Gialli",
        contenuto: "Scopri i 5 framework CSS più utilizzati che ti aiuteranno a creare design responsive e moderni.",
        categoria: "Design"
    },
    {
        id: 5,
        titolo: "Guida introduttiva ai React Hooks",
        autore: "Marco Neri",
        contenuto: "Una guida passo-passo per comprendere e utilizzare i React Hooks, uno degli strumenti più potenti in React.",
        categoria: "React"
    }
];

const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: "",
};

// componente
export default function ArticlesForm() {

    const [articles, setArticles] = useState(initialArticles);
    const [formData, setFormData] = useState(initialFormData);

    // Gestione dati inseriti nel form
    function handleFormData(e) {
        const value = e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    // Aggiunta articolo tramite submit del form
    function handleSubmit(e) {
        e.preventDefault();
        setArticles((currentArticles) => [...currentArticles, {
            id:
                currentArticles.length === 0 ? 1 : currentArticles[currentArticles.length - 1].id + 1,
            ...formData
        }]);
        // resetto il form
        setFormData(initialFormData);
    }

    // Cancellazione articolo
    function removeArticle(idArticle) {
        const updateArticles = articles.filter((item) => {
            return item.id !== idArticle;
        })
        setArticles(updateArticles);
    }

    return (
        <>
            <form className='article-form' action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="titolo"
                    onChange={handleFormData}
                    value={formData.titolo}
                    placeholder="Titolo dell' articolo"
                />
                <input
                    type="text"
                    name="autore"
                    onChange={handleFormData}
                    value={formData.autore}
                    placeholder="Autore dell' articolo"
                />
                <input
                    type="text"
                    name="contenuto"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder="Contenuto dell' articolo"
                />
                <input
                    type="text"
                    name="categoria"
                    onChange={handleFormData}
                    value={formData.categoria}
                    placeholder="Categoria dell' articolo"
                />
                <button>Aggiungi</button>
            </form >

            {articles.length === 0 ?
                <h2>Non ci sono articoli da visualizzare</h2>
                :
                <div className='articles-list'>
                    {articles.map((item) => (
                        <div className='article' key={item.id}>
                            <h2>{item.titolo}</h2>
                            <p className='contenuto'>{item.contenuto}</p>
                            <p className='autore'>Scritto da: {item.autore}</p>
                            <p className='categoria'>{item.categoria}</p>
                            <button onClick={() => removeArticle(item.id)}>
                                Elimina
                            </button>
                        </div>
                    ))
                    }
                </div >
            }
        </>
    )

}