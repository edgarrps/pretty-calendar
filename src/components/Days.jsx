

const Days = (props) => {
  return (
    <p>{props.day.format('DD').toString()}</p>
  )
}

export default Days