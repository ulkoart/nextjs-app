import Link from 'next/link';
import Rating from './Rating';
import './Session.css';

const Speaker = ({ speaker, twitter }) =>
  speaker ? (
    <p className="Speaker">
      {speaker} / <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
    </p>
  ) : null;

export default ({title, description, slug, rating = false, ...props}) => (
  <div className="Session">
    <h2>
      <Link
        as={`/session/${slug}?rating=4`}
        href={`session?slug=${slug}&rating=4`}>
        <a>{title}</a>
      </Link>
    </h2>
    <p>{description}</p>    
    {rating && process.env.SHOW_SPEAKER && <Speaker {...props} />}
  </div>
);
