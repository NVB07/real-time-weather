import SearchHeader from "@/components/searchHeader/SearchHeader";
import TabsHeader from "@/components/tabs/TabsHeader";

function Search() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#2e2e2e]">
            <div className="w-[1200px] max-w-[1200px] bg-[#111015] rounded-xl min-h-[80vh] p-4 px-8 relative z-20">
                <SearchHeader />
                <div className="">
                    <TabsHeader />
                </div>
            </div>
        </div>
    );
}

export default Search;
