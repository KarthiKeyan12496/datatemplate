const Name = (cell : any) => {
  return cell.value ? cell.value : "";
};

const CreatedBy = (cell : any) => {
  return cell.value ? cell.value : "";
};

const APIKeys = (cell : any) => {
  return (
    <input type="text" className="form-control apikey-value" readOnly defaultValue={cell.value} />
  )
};

const Status = (cell : any) => {
  return cell.value ? cell.value : "";
};

const CreatedDate = (cell : any) => {
  return cell.value ? cell.value : "";
};

const ExpiryDate = (cell : any) => {
  return cell.value ? cell.value : "";
};

export { Name, CreatedBy, APIKeys, Status, CreatedDate, ExpiryDate };
