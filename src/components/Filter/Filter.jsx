import { FilterWrapper } from "./Filter.styled"

export const Filter = ({handlerChange, filter}) => {
    return(
        <FilterWrapper>
        Filter by name
      <input onChange={handlerChange}
            value={filter}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
      </FilterWrapper>
    )
}