
function RifaPuesto(props) {

  return (
    <div
      className={`${props.estado}  col-1 m-2 P_rifa border border-1 rounded`}
    >
      <p className="fs-1">{props.numeroPuesto}</p>
    </div>
  );
}

export default RifaPuesto;
