// Analytics system
class AnalyticsSystem {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  // Send event to analytics
  async sendEvent(eventName, eventData) {
    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          timestamp: Date.now()
        })
      });
    } catch (error) {
      console.error('Error sending event:', error);
    }
  }
}

// Initialize analytics system
const analyticsSystem = new AnalyticsSystem('https://analytics.example.com/events');
