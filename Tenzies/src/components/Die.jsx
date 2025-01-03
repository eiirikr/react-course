export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "#fff",
  };
  return (
    <button style={styles} onClick={props.hold}>
      {props.value}
    </button>
  );
}
