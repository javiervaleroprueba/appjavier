
function RifaPuesto(props) {

  return (
    <div
      className={`${props.estado}  ${props.pago} col-2 col-md-1 m-2 P_rifa border border-1 rounded d-flex`}
    >
      <div className="row">
        <div className="col-12">
          <h1 className="fs-1">{props.numeroPuesto}</h1>
        </div>
        <div className="col-12 nombre">
        <p>{props.nombre}</p>
        </div>
      </div>
    </div>
  );
}

export default RifaPuesto;
