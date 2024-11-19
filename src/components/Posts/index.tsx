import { Post, CompanyProps } from "../Post";
import postsStyles from "./style.module.css";


// Dados para teste, quando for integrar com a API substitua isso pelo que vem do fetch
// Adapte os nomes e dados que você precisar com base no que está sendo repassado pela api
const mockedData: CompanyProps[] = [
  {
    id: 1,
    title: "First Post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis debitis voluptatum!",
    img_src: "/backgroundHomeGreen.jpg",
    qtd_comments: 30,
    qtd_views: 135,
  },
  {
    id: 2,
    title: "Second Post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis debitis voluptatum!",
    img_src: "/backgroundHomeSol.png",
    qtd_comments: 3,
    qtd_views: 48,
  },
  {
    id: 3,
    title: "Third Post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis debitis voluptatum!",
    img_src: "/backgroundHomeGreen.jpg",
    qtd_comments: 23,
    qtd_views: 64,
  },
  {
    id: 4,
    title: "Fourth Post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis debitis voluptatum!",
    img_src: "/backgroundHomeSol.png",
    qtd_comments: 27,
    qtd_views: 54,
  },
];

export const Posts = () => {
  return (
    <div className={postsStyles.Posts}>
      {mockedData.map((post) => (
        <Post
          key={`${post.title}-${post.id}`}
          title={post.title}
          description={post.description}
          img_src={post.img_src}
          qtd_comments={post.qtd_comments}
          qtd_views={post.qtd_views}
        />
      ))}
    </div>
  );
};
