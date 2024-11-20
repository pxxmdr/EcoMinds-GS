export default function AboutPage() {
  return (
      <div className="business_description">
        <h1 className="page_title green">Solara</h1>
        <p className="description_project" style={{ marginBottom: "1rem" }}>
          {" "}
            O Solara é um controlador de microgrid, uma solução projetada para gerenciar o uso de energia por estes sistemas, registrando níveis de produção, armazenamento e consumo. Com a ferramenta, é possível acessar e otimizar o uso de energia tanto via desktop quanto por meio de dispositivos móveis. A interface é intuitiva, limpa e objetiva, proporcionando informações claras e transparentes.
Com o Solara, você controla quais fontes de energia estarão ativas, além de monitorar a energia gerada e consumida. A solução permite a administração eficiente de múltiplas fontes de energia por meio de dashboards interativos e fáceis de usar, oferecendo uma visão detalhada do desempenho do seu microgrid.
         A ferramenta também auxilia na tomada de decisões estratégicas sobre o uso de energia, ajudando a maximizar a eficiência e reduzir custos. O Solara fornece uma visão completa do consumo energético, permitindo ajustes rápidos e precisos para garantir o uso ideal da energia disponível.
       Além disso, o Solara é escalável, adaptando-se desde pequenas instalações até maiores sistemas energéticos. Sua flexibilidade garante que a solução atenda às necessidades específicas de cada cliente, proporcionando controle total sobre o consumo de energia. Com o Solara, a gestão de energia se torna simples, eficaz e acessível.
        </p>
        <img
          src="/microgrid.png"
          alt="Explicação do projeto em formato de imagem"
        />
      </div>
  );
}
