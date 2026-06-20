/**
 * Protocol Communication Types
 * Swarnakasa Mission Control - Multi-Protocol Support
 */

export type ProtocolId = 'lora' | 'elrs' | 'gsm';
export type ProtocolStatus = 'active' | 'standby' | 'disconnected';

/**
 * Protocol Health Status
 * Real-time data for each communication protocol
 */
export interface ProtocolStatusData {
  id: ProtocolId;
  rssi: number;                    // Signal strength in dBm
  linkQuality: number;             // Link Quality percentage (0-100)
  packetLoss: number;              // Packet loss percentage (0-100)
  latencyMs: number;               // Latency/ping in milliseconds
  status: ProtocolStatus;          // Current protocol status
  lastSeen: number;                // Timestamp of last update (ms)
}

/**
 * Protocol Switching Event
 * Logged when protocol changes during flight
 */
export interface SwitchingEvent {
  timestamp: number;               // When the switch occurred
  fromProtocol: string;            // Previous protocol name
  toProtocol: string;              // New protocol name
  reason: string;                  // Why the switch happened
  rssiAtSwitch: number;            // Signal strength at moment of switch
}

/**
 * Protocol Configuration
 * User-defined settings for protocol behavior
 */
export interface ProtocolConfig {
  priorityOrder: ProtocolId[];     // Default: ['lora', 'elrs', 'gsm']
  rssiThreshold: number;           // dBm value for switching (default: -85)
  packetLossThreshold: number;     // Percentage (default: 15)
  manualOverrides: Partial<Record<ProtocolId, boolean>>; // Manual override state per protocol
}

/**
 * Protocol Timeline Entry (for flight exports)
 * Shows which protocol was active at each telemetry point
 */
export interface ProtocolTimelineEntry {
  timestamp: number;               // Telemetry timestamp
  activeProtocol: ProtocolId | null; // Protocol active at this time
  rssi: number;
  linkQuality: number;
  packetLoss: number;
}

/**
 * Tile Cache Metadata
 * Stores information about cached map tiles
 */
export interface TileCacheMetadata {
  id: string;                      // Unique cache identifier
  name: string;                    // User-friendly cache name
  boundingBox: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
  zoomLevels: [number, number];    // [min, max] zoom levels
  tileCount: number;               // How many tiles cached
  estimatedSizeMB: number;         // Estimated storage in MB
  createdAt: number;               // Creation timestamp
  lastUpdated: number;             // Last update timestamp
  coverage: string;                // Area name/description
}

/**
 * Tile Cache Progress
 * Real-time progress of tile caching operation
 */
export interface TileCacheProgress {
  caching: boolean;                // Is caching in progress?
  current: number;                 // Tiles cached so far
  total: number;                   // Total tiles to cache
  percentComplete: number;         // Progress percentage (0-100)
  estimatedTimeRemainingSec: number; // ETA in seconds
}

/**
 * Pre-Flight Checklist Item Status
 */
export interface ChecklistItem {
  id: string;
  label: string;
  category: 'auto' | 'manual';
  completed: boolean;
  status: 'pass' | 'fail' | 'pending';
}

/**
 * Pre-Flight Checklist State
 */
export interface PreFlightChecklistState {
  isOpen: boolean;
  items: ChecklistItem[];
  overallStatus: 'clear' | 'issues' | 'pending';
  completionPercentage: number;
}

/**
 * Protocol Notification
 * For toast/alert system
 */
export interface ProtocolNotification {
  id: string;
  type: 'PROTOCOL_SWITCH' | 'PROTOCOL_ERROR' | 'PROTOCOL_CONNECTED' | 'PROTOCOL_DISCONNECTED';
  protocol: ProtocolId;
  message: string;
  timestamp: number;
  dismissed: boolean;
}
