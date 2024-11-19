export default function AboutPage() {
  return (
      <div className="business_description">
        <h1 className="page_title green">Solara</h1>
        <p className="description_project" style={{ marginBottom: "1rem" }}>
          {" "}
          Microgrid ou microrrede é uma pequena rede elétrica que pode operar de
          forma independente ou junto à rede principal. Ele integra diferentes
          fontes de energia, como solar, eólica e de geradores, junto com
          armazenamento em baterias, para fornecer energia a áreas específicas,
          como comunidades ou indústrias. Controlado por um sistema central, o
          microgrid melhora a resiliência, promove o uso de fontes renováveis e
          oferece maior eficiência no consumo local de energia, sendo ideal para
          áreas remotas ou comunidades que buscam autonomia energética.
        </p>
        <img
          src="/microgrid.png"
          alt="Explicação do projeto em formato de imagem"
        />
      </div>
  );
}
