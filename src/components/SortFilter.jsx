import React, { useState } from "react";
import { FilterList, Menu } from "@material-ui/icons";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
	border-bottom: solid 1px #e0e0e0;
	${tw`
    w-full
    h-12
    2xl:h-16
  `};
`;

const Wrapper = styled.div`
	${tw`
    w-full
    h-full
    flex
    justify-start
    pl-6
    sm:pl-12
    lg:pl-20
    xl:pl-12
    3xl:pl-20
  `};
`;

const TextContainer = styled.div`
	${tw`
    flex
    items-center
  `};
`;

const TextContainer2 = styled(TextContainer)`
	margin-left: 1.25rem;
	${tw`
    2xl:ml-10
  `}
`;

const Text = styled.p`
	font-family: futura-pt, sans-serif;
	${tw`
    text-sm
    font-medium
    2xl:text-base
    2xl:font-normal
    3xl:text-lg
  `};
`;

const Dropdown = styled.div`
	${tw`
    absolute
    mt-2
    w-40
    bg-white
    border
    border-gray-300
    rounded-md
    shadow-md
    hidden
  `};
`;

const DropdownItem = styled.div`
	${tw`
    py-2
    px-4
    hover:bg-gray-100
    cursor-pointer
  `}
`;

const Select = styled.select`
	${tw`
    py-1
    px-2
		ml-3
    hover:bg-gray-100
    cursor-pointer
    appearance-none
    border
    border-gray-300
    rounded-md
  `}
`;

const SortFilter = ({ onSortChange, onFilterChange }) => {
	const [selectedSort, setSelectedSort] = useState("default");
	const [selectedFilter, setSelectedFilter] = useState("default");

	const handleSortChange = (event) => {
		setSelectedSort(event.target.value);
		onSortChange(event.target.value);
	};

	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.value);
		onFilterChange(event.target.value);
	};

	return (
		<Container>
			<Wrapper>
				<TextContainer>
					<Text>SORT BY</Text>
					<Menu
						style={{
							marginLeft: "0.5rem",
							maxWidth: "20px",
							maxHeight: "20px",
						}}
					/>
					<Select value={selectedSort} onChange={handleSortChange}>
						<option value="default" disabled>
							Select Option
						</option>
						<option value="price-low-to-high">Price Low to High</option>
						<option value="price-high-to-low">Price High to Low</option>
					</Select>
				</TextContainer>
				<TextContainer2>
					<Text>FILTER BY</Text>
					<FilterList
						style={{
							marginLeft: "0.5rem",
							maxWidth: "20px",
							maxHeight: "20px",
						}}
					/>
					<Select value={selectedFilter} onChange={handleFilterChange}>
						<option value="default" disabled>
							Color
						</option>
						<option value="all">All</option>
						<option value="black">Black</option>
						<option value="red">Red</option>
						<option value="tan">Tan</option>
						<option value="b&w">B&W</option>
						<option value="purple">Purple</option>
						{/* Add more filtering options as needed */}
					</Select>
				</TextContainer2>
			</Wrapper>
		</Container>
	);
};

export default SortFilter;
