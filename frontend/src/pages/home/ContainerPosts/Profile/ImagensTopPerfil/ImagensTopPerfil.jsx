import "./imagensTopPerfil.css"


function ImagensTopPerfil ({banner, perfil}) {
    return (
        <div className="container-imagens-top-perfil"
        style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '100%',
        }}
        >
        <img className="perfil-top-perfil" src={perfil} alt="" />
        </div>
    )
}


export default ImagensTopPerfil