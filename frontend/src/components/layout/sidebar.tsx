import { CosineIcon } from "../@icons/cosine"
import { IconHome } from "../@icons/home"
import { IndexingIcon } from "../@icons/indexing"
import { JournalIcon } from "../@icons/journal"
import { TextPreprocessingIcon } from "../@icons/preprocessing"
import { SearchIcon } from "../@icons/search"
import { TFIDFIcon } from "../@icons/tfidf"
import { LinkSidebar } from "../@ui/link-sidebar"
import logo from "../../assets/unisbank-logo-full.webp"

export const Sidebar = () => {
    return (
        <aside className="flex flex-col min-w-64 h-screen px-5 py-8 overflow-y-auto bg-unisbank-500 border-r rtl:border-r-0 rtl:border-l">
            <a href="https://unisbank.ac.id" className="flex flex-row justify-center items-center">
                <img className="w-auto h-10" src={logo} alt="Unisbank Logo" />
            </a>
        
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-gray-100 uppercase dark:text-gray-100">Main Menu</label>

                        <LinkSidebar icon={<IconHome />} link="#" name="Home" />
                        <LinkSidebar icon={<SearchIcon />} link="pencarian" name="Pencarian Jurnal" />
                        <LinkSidebar icon={<JournalIcon />} link="#" name="Data Jurnal" />
                        <LinkSidebar icon={<TextPreprocessingIcon />} link="#" name="Text Processing" />
                        <LinkSidebar icon={<IndexingIcon />} link="#" name="Text Indexing" />
                        <LinkSidebar icon={<TFIDFIcon />} link="#" name="Pembobotan TF-IDF" />
                        <LinkSidebar icon={<CosineIcon />} link="#" name="Cosine Similarity" />
                    </div>
    
                </nav>
            </div>
        </aside>
    )
}