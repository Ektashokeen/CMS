// Fetch data from the backend (replace with your actual API calls)
async function fetchContracts() {
    try {
      // Replace this URL with your actual endpoint
      const response = await fetch('/api/contracts'); 
      if (!response.ok) {
        throw new Error('Failed to fetch contracts');
      }
      const contracts = await response.json();
      return contracts;
    } catch (error) {
      console.error('Error fetching contracts:', error);
      return [];
    }
  }
  
  // Function to update contract summary counts
  async function updateContractSummary() {
    const contracts = await fetchContracts();
    
    const totalContracts = contracts.length;
    const activeContracts = contracts.filter(contract => contract.status === 'active').length;
    const expiredContracts = contracts.filter(contract => contract.status === 'expired').length;
    const nearExpirationContracts = contracts.filter(contract => contract.status === 'near_expiration').length;
  
    document.getElementById('totalContracts').textContent = totalContracts;
    document.getElementById('activeContracts').textContent = activeContracts;
    document.getElementById('expiredContracts').textContent = expiredContracts;
    document.getElementById('nearExpirationContracts').textContent = nearExpirationContracts;
  }
  
  // Fetch recent activities from the backend
  async function fetchRecentActivities() {
    try {
      // Replace this URL with your actual endpoint
      const response = await fetch('/api/recent-activities');
      if (!response.ok) {
        throw new Error('Failed to fetch recent activities');
      }
      const activities = await response.json();
      return activities;
    } catch (error) {
      console.error('Error fetching recent activities:', error);
      return [];
    }
  }
  
  // Function to populate recent activity
  async function populateRecentActivity() {
    const recentActivityList = document.getElementById('recentActivityList');
    recentActivityList.innerHTML = ''; // Clear existing items
  
    const recentActivities = await fetchRecentActivities();
  
    recentActivities.forEach(activity => {
      const li = document.createElement('li');
      li.textContent = activity.description; // Assuming activity has a description field
      recentActivityList.appendChild(li);
    });
  }
  
  // Fetch upcoming deadlines from the backend
  async function fetchUpcomingDeadlines() {
    try {
      // Replace this URL with your actual endpoint
      const response = await fetch('/api/upcoming-deadlines');
      if (!response.ok) {
        throw new Error('Failed to fetch upcoming deadlines');
      }
      const deadlines = await response.json();
      return deadlines;
    } catch (error) {
      console.error('Error fetching upcoming deadlines:', error);
      return [];
    }
  }
  
  // Function to populate upcoming deadlines
  async function populateUpcomingDeadlines() {
    const upcomingDeadlinesList = document.getElementById('upcomingDeadlinesList');
    upcomingDeadlinesList.innerHTML = ''; // Clear existing items
  
    const upcomingDeadlines = await fetchUpcomingDeadlines();
  
    upcomingDeadlines.forEach(deadline => {
      const li = document.createElement('li');
      li.textContent = `${deadline.contractName} - Expires on ${deadline.expirationDate}`; // Customize as needed
      upcomingDeadlinesList.appendChild(li);
    });
  }
  
  // Function to filter contracts based on search input
  async function filterContracts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const contracts = await fetchContracts();
  
    const filteredContracts = contracts.filter(contract => 
      contract.name.toLowerCase().includes(searchInput)
    );
  
    // For now, log the filtered contracts. You may wish to display them on the page.
    console.log('Filtered Contracts:', filteredContracts);
  }
  
  // Initialize the dashboard on page load
  document.addEventListener('DOMContentLoaded', () => {
    updateContractSummary();
    populateRecentActivity();
    populateUpcomingDeadlines();
  });
  