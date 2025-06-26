import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function CraftRenderer({ craft }) {
  switch (craft.name) {
    case "admin_stick":
    case "scissors":
    case "spawner_breaker":
    case "zombification_potion":
      return <RenderDefault craft={craft} />;
    case "bolsita":
      return <RenderBundle craft={craft} />;
    case "campfire_rotten_flesh":
      return <RenderCampfire craft={craft} />;
    default:
      return <RenderDefault craft={craft} />;
  }
}

function RenderDefault({ craft }) {
  return (
    <div className="item d-flex flex-column flex-md-row align-items-center mb-5">
      <a id={craft.name} className="anchor" />
      <div className="item-image me-3">
        <img className="img-fluid" src={craft.image} alt={craft.name} />
      </div>
      <div className="item-ui text-center text-md-start">
        <h3 className={`title ${craft.titleFormat} m-0 p-0`}>{craft.title}</h3>
        <p className={`description ${craft.descriptionFormat} m-0 p-0`}>{craft.description}</p>
        <span className="tag color8 formatR m-0 p-0">{craft.tag}</span>
      </div>
    </div>
  );
}

function RenderBundle({ craft }) {
  return (
    <div className="item d-flex flex-column flex-md-row align-items-center mb-5">
      <a id={craft.name} className="anchor" />
      <div className="item-image me-3">
        <img className="img-fluid" src={craft.image} alt={craft.name} />
      </div>
      <div className="item-ui text-center text-md-start">
        <h3 className={`title ${craft.titleFormat} m-0 p-0`}>{craft.title}</h3>
        <img className="img-fluid" src={craft.subimage} alt="TwoSlots" />
        <p className={`description ${craft.descriptionFormat} m-0 p-0`}>{craft.description[0]}</p>
        <p className={`description ${craft.descriptionFormat} m-0 p-0`}>{craft.description[1]}</p>
        <span className="tag color8 formatR m-0 p-0">{craft.tag}</span>
      </div>
    </div>
  );
}

function RenderCampfire({ craft }) {
  return (
    <div className="item d-flex flex-column flex-md-row align-items-center mb-5">
      <a id={craft.name} className="anchor" />
      <div className="item-image me-3">
        <img
          className="img-fluid"
          src={craft.image}
          alt={craft.name}
          style={{ maxWidth: "200px", height: "auto" }}
        />
      </div>
      <div className="item-ui me-3 text-center text-md-start">
        <h3 className={`title ${craft.titleFormat} m-0 p-0`}>{craft.title}</h3>
        <p className={`description ${craft.descriptionFormat} m-0 p-0`}>{craft.description}</p>
        <span className="tag color8 formatR m-0 p-0">{craft.tag}</span>
      </div>
      <p className="big-centered-number m-0 p-0 formatR">{craft.paired_item.chance}</p>
      <div className="item-ui ms-2 text-center text-md-start">
        <h3 className={`title ${craft.titleFormat} m-0 p-0`}>{craft.paired_item.name}</h3>
        <p className={`description ${craft.descriptionFormat} m-0 p-0`}>{craft.paired_item.description}</p>
        <span className="tag color8 formatR m-0 p-0">{craft.paired_item.tag}</span>
      </div>
    </div>
  );
}
