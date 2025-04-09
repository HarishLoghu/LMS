import { cn } from "@/lib/utils"
import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { SearchBar } from "@/components/ui/search-bar"
import { Sidebar } from "@/components/sidebar"
import { BookOpen, Clock, Filter, User } from "lucide-react"

// Mock data for rented-out books
const rentedOutBooks = [
  {
    id: 1,
    title: "Neuromancer",
    author: "William Gibson",
    borrower: "Alex Chen",
    borrowerId: "USR-001",
    borrowDate: "2025-03-01",
    dueDate: "2025-04-01",
    isOverdue: true,
  },
  {
    id: 2,
    title: "Snow Crash",
    author: "Neal Stephenson",
    borrower: "Jamie Smith",
    borrowerId: "USR-042",
    borrowDate: "2025-03-15",
    dueDate: "2025-04-15",
    isOverdue: false,
  },
  {
    id: 3,
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    borrower: "Taylor Johnson",
    borrowerId: "USR-107",
    borrowDate: "2025-03-20",
    dueDate: "2025-04-20",
    isOverdue: false,
  },
  {
    id: 4,
    title: "Ready Player One",
    author: "Ernest Cline",
    borrower: "Morgan Lee",
    borrowerId: "USR-089",
    borrowDate: "2025-02-28",
    dueDate: "2025-03-28",
    isOverdue: true,
  },
  {
    id: 5,
    title: "The Diamond Age",
    author: "Neal Stephenson",
    borrower: "Casey Wilson",
    borrowerId: "USR-156",
    borrowDate: "2025-03-10",
    dueDate: "2025-04-10",
    isOverdue: false,
  },
  {
    id: 6,
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    borrower: "Jordan Rivera",
    borrowerId: "USR-073",
    borrowDate: "2025-02-15",
    dueDate: "2025-03-15",
    isOverdue: true,
  },
]

export default function RentedOutBooksPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-neon-blue text-glow-blue">Currently Rented-Out Books</h1>
            <p className="text-gray-400 mt-2">Track all books currently checked out by library members</p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <NeonCard variant="blue" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Checked Out</p>
                  <h3 className="text-2xl font-bold text-white">{rentedOutBooks.length}</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-blue/20">
                  <BookOpen className="h-6 w-6 text-neon-blue" />
                </div>
              </div>
            </NeonCard>

            <NeonCard variant="pink" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Overdue</p>
                  <h3 className="text-2xl font-bold text-white">
                    {rentedOutBooks.filter((book) => book.isOverdue).length}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-neon-pink/20">
                  <Clock className="h-6 w-6 text-neon-pink" />
                </div>
              </div>
            </NeonCard>

            <NeonCard variant="green" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Borrowers</p>
                  <h3 className="text-2xl font-bold text-white">
                    {new Set(rentedOutBooks.map((book) => book.borrowerId)).size}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-neon-green/20">
                  <User className="h-6 w-6 text-neon-green" />
                </div>
              </div>
            </NeonCard>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <SearchBar className="mb-4" placeholder="Search by title, author, or borrower..." />

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-neon-blue mr-2" />
                <span className="text-gray-300">Filter by:</span>
              </div>

              {/* Status Filter */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Status</option>
                <option>Overdue</option>
                <option>On Time</option>
              </select>

              {/* Date Filter */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Dates</option>
                <option>Due This Week</option>
                <option>Due Next Week</option>
                <option>Due This Month</option>
              </select>
            </div>
          </div>

          {/* Rented-Out Books Table */}
          <NeonCard variant="blue" className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neon-blue/30">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Book
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Borrower
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Borrowed
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rentedOutBooks.map((book) => (
                    <tr
                      key={book.id}
                      className={cn(
                        "transition-colors duration-150",
                        book.isOverdue ? "bg-neon-pink/5 hover:bg-neon-pink/10" : "hover:bg-neon-blue/10",
                      )}
                    >
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-white">{book.title}</div>
                          <div className="text-xs text-gray-400 ml-2">by {book.author}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-neon-blue" />
                          </div>
                          <div>
                            <div className="text-sm text-white">{book.borrower}</div>
                            <div className="text-xs text-gray-400">{book.borrowerId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{book.borrowDate}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{book.dueDate}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={cn(
                            "px-2 py-1 text-xs rounded-full",
                            book.isOverdue ? "bg-neon-pink/20 text-neon-pink" : "bg-neon-green/20 text-neon-green",
                          )}
                        >
                          {book.isOverdue ? "Overdue" : "On Time"}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <NeonButton variant="blue" size="sm">
                            Details
                          </NeonButton>
                          <NeonButton variant={book.isOverdue ? "pink" : "green"} size="sm">
                            {book.isOverdue ? "Send Reminder" : "Check In"}
                          </NeonButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </NeonCard>
        </div>
      </main>
    </div>
  )
}

