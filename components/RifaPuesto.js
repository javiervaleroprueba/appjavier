
function RifaPuesto(props) {

  return (
    <div
      className={`${props.estado}  col-2 col-md-1 m-2 P_rifa border border-1 rounded d-flex`}
    >
      <h1 className="fs-1">{props.numeroPuesto}</h1>

      <p>{props.nombre}</p>
    </div>
  );
}

export default RifaPuesto;
