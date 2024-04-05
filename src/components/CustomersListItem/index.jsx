/* eslint-disable react/prop-types */
import s from "./customersListItem.module.scss";
const CustomersListItem = ({
  name,
  company,
  number,
  email,
  country,
  status,
}) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{company}</td>
        <td>{number}</td>
        <td>{email}</td>
        <td>{country}</td>
        <td>
          {" "}
          <p
            className={status ? s.table__statusActive : s.table__statusInActive}
          >
            {status ? "Active" : "Inactive"}
          </p>
        </td>
      </tr>
    </>
  );
};

export default CustomersListItem;
