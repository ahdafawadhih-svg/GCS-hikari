/**
 * Field HUD Mode Types
 * For Raspberry Pi 4 cyberdeck optimization (1920x1080 landscape)
 */

export type FieldHUDLayout = 'standard' | 'pfd-map-telem' | 'compact';

export interface FieldHUDSettings {
  enabled: boolean;
  layout: FieldHUDLayout;
  showProtocolBar: boolean;
  showAlertsFeed: boolean;
  showQuickCommands: boolean;
  refreshRateMs: number;      // Target refresh rate for performance
  fontSize: 'small' | 'medium' | 'large';
}

export interface FieldHUDState {
  isFieldHUDActive: boolean;
  settings: FieldHUDSettings;
  lastUpdate: number;
}

export type QuickCommand = 'arm' | 'disarm' | 'rtl' | 'stabilize' | 'loiter' | 'auto' | 'land';
