// "use client";
//
// import CardList from "@/components/CardList";
// import TagList from "@/components/TagList";
// import NavBar from "@/components/Navbar";
// import Section from "@/components/Section";
// import extractTags from "@/utils/extractTags";
// import useMainLogic from "@/components/hooks/useMainLogic";
// import { portfolios } from "@/helpers/portfolios";
// import countries from "@/helpers/countries";
// import { notFound } from "next/navigation";
//
// type PageProps = {
//   params: {
//     slug: string[];
//   };
// };
//
// const getPortfolios = (slug: string) => {
//   return portfolios.filter(
//     (groupedPortfolio) => groupedPortfolio.country === slug,
//   );
// };
//
// export default function PortfolioList({ params }: PageProps) {
//   const slug = params.slug[0];
//
//   if (!countries.some((country) => country.code === slug)) {
//     notFound();
//   }
//
//   const data = getPortfolios(slug);
//   const { filteredData, selectedTags, setTag, filterByName } =
//     useMainLogic(data);
//
//   return (
//     <>
//       <NavBar onChangeValue={filterByName} />
//       <Section />
//       <main className="main">
//         <div className="main-container">
//           <aside className="main-container-aside">
//             <TagList
//               filteredData={filteredData}
//               tags={extractTags(data)}
//               setTag={setTag}
//               selectedTags={selectedTags}
//             />
//           </aside>
//           <div className="main-container-body">
//             <CardList filteredData={filteredData} />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
