import CustomersListItem from "../../components/CustomersListItem";
import Nav from "../../components/Nav";
import s from "./Customers.module.scss";
const Customers = () => {
  const customersList = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      number: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: true,
    },
    {
      name: "Floyd Miles",
      company: "Yahoo",
      number: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false,
    },
    {
      name: "Ronald Richards",
      company: "Adobe",
      number: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: false,
    },
    {
      name: "Marvin McKinney",
      company: "Tesla",
      number: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: true,
    },
    {
      name: "Jerome Bell",
      company: "Google",
      number: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: true,
    },
    {
      name: "Kathryn Murphy",
      company: "Microsoft",
      number: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: true,
    },
    {
      name: "Jacob Jones",
      company: "Yahoo",
      number: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: true,
    },
    {
      name: "Kristin Watson",
      company: "Facebook",
      number: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: false,
    },
  ];
  return (
    <div className="container">
      <Nav />
      <div className={s.customers}>
        <h2 className={s.customers__title}>Hello Evano 👋🏼,</h2>
        <div className={s.customers__table}>
          <div className={s.customers__header}>
            <div className={s.cutomers__headerWrapper}>
              <h3 className={s.customers__headerTitle}>All Customers</h3>
              <p className={s.customers__headerText}>Active Members</p>
            </div>
            <div className={s.customers__headerInput}>
              <input placeholder="Search" type="text" />
            </div>
          </div>
          <div className={s.customers__tableWrapper}>
            <table>
              <tr>
                <td className={s.customers__tableTitles}>Customer Name</td>
                <td className={s.customers__tableTitles}>Company</td>
                <td className={s.customers__tableTitles}>Phone Number</td>
                <td className={s.customers__tableTitles}>Email</td>
                <td className={s.customers__tableTitles}>Country</td>
                <td className={s.customers__tableTitles}>Status</td>
              </tr>
              {customersList.map((el, id) => (
                <CustomersListItem key={id} {...el} />
              ))}
            </table>
          </div>
          <div className={s.customers__sign}>
            <p className={s.customers__signTitle}>
              Showing data 1 to 8 of 256K entries
            </p>
            <div>
              <ul className={s.customers__paggination}>
                <li>
                  <span>
                    <img
                      src="pagginationArrow.svg"
                      alt="arrow"
                    />
                  </span>
                </li>
                <li className={s.customers__pagginationActive}>
                  <span>1</span>
                </li>
                <li className={s.customers__pagginationItem}>
                  <span>2</span>
                </li>
                <li className={s.customers__pagginationItem}>
                  <span>3</span>
                </li>
                <li className={s.customers__pagginationItem}>
                  <span>4</span>
                </li>
                <li className={s.customers__pagginationItem}>
                  <span>5</span>
                </li>
                <li className={s.customers__pagginationItem}>
                  <span>
                    <img
                      src="pagginationArrow.svg"
                      alt="arrow"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
