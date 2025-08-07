import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Coachs = () => {
  const { type } = useParams()
  const { coaches } = useContext(AppContext)
  const [filterCoaches, setFilterCoaches] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const navigate = useNavigate()

  const applyFilter = () => {
    const result = coaches.filter(coach => {
      const types = coach.type.split(',').map(t => t.trim())
      const matchType = !type || types.includes(type)
      const matchCategory = selectedCategory === 'All' || coach.category === selectedCategory
      return matchType && matchCategory
    })
    setFilterCoaches(result)
  }

  useEffect(() => {
    applyFilter()
  }, [coaches, type, selectedCategory])

  const categories = ['All', 'nutrition', 'fitness', 'psychology']
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-4">Browse through the blood types and categories</p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Blood Type Links */}
        <div className={` flex flex-wrap gap-2 `}>
          {bloodTypes.map(bt => (
            <p
              key={bt}
              onClick={() => type === `${bt}`? navigate('/coachs') : navigate(`/coachs/${bt}`)}
              className={`cursor-pointer px-3 py-1 rounded-full border ${
                type === bt ? 'bg-end text-white' : 'hover:bg-red-100'
              }`}
            >
              {bt}
            </p>
          ))}
        </div>

        {/* Category Dropdown */}
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className={`border p-2 rounded `}
        >
          {categories.map(cat => (
            <option   key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      {/* Coach Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterCoaches.map((item, index) => (
          <div
            onClick={() => navigate(`/appointments/${item._id}`)}
            key={index}
            className="border-2 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm capitalize">{item.category}</p>
              <p className="text-gray-500 text-sm">For types: {item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coachs
