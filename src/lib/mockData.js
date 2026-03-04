export const mockStats = [
    { label: 'Total Spend', value: '$12,482.50', trend: '-12%', positive: true },
    { label: 'Savings Found', value: '$3,120.45', trend: '+8%', positive: true },
    { label: 'Total API Calls', value: '4.2M', trend: '+15%', positive: false },
    { label: 'Avg Latency', value: '342ms', trend: '-5%', positive: true },
];

export const providersData = {
    labels: ['OpenAI', 'Anthropic', 'Google', 'Mistral', 'Other'],
    datasets: [{
        data: [45, 25, 15, 10, 5],
        backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#64748b'],
    }]
};

export const spendTrendData = {
    labels: ['Feb 01', 'Feb 05', 'Feb 10', 'Feb 15', 'Feb 20', 'Feb 21'],
    datasets: [
        {
            label: 'Daily Spend ($)',
            data: [450, 520, 380, 610, 490, 420],
            borderColor: '#3b82f6',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
        }
    ]
};

export const recentAlerts = [
    { id: 1, type: 'critical', message: 'Budget limit reached for "Project X"', time: '2h ago' },
    { id: 2, type: 'warning', message: 'Spike in GPT-4 usage detected', time: '5h ago' },
    { id: 3, type: 'info', message: 'New savings opportunity found: Model Downgrade', time: '1d ago' },
];

export const modelUsage = [
    { name: 'GPT-4-Turbo', calls: '1.2M', cost: '$5,210', efficiency: 'High' },
    { name: 'Claude 3 Opus', calls: '450k', cost: '$3,100', efficiency: 'Medium' },
    { name: 'Gemini 1.5 Pro', calls: '820k', cost: '$1,240', efficiency: 'Optimal' },
    { name: 'GPT-3.5-Turbo', calls: '1.5M', cost: '$932', efficiency: 'High' },
];
