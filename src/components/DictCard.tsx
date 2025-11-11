import React from 'react';

interface DictCardProps {
  title: string;
  subtitle?: string;
  date?: string;
  count?: number;
  isSelected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const DictCard: React.FC<DictCardProps> = ({
  title,
  subtitle,
  date,
  count,
  isSelected = false,
  onClick,
  style,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: isSelected
      ? 'rgba(92, 110, 255, 0.3)'
      : 'rgba(255, 255, 255, 0.5)',
    borderRadius: '15px',
    padding: '10px',
    cursor: onClick ? 'pointer' : 'default',
    position: 'relative',
    ...style,
  };

  return (
    <div onClick={onClick} style={cardStyle}>
      <p
        style={{
          fontFamily: 'SF Pro',
          fontWeight: 510,
          fontSize: '18px',
          lineHeight: '36px',
          color: '#000000',
          textAlign: 'center',
          letterSpacing: '-0.43px',
        }}
      >
        {title}
      </p>
      {subtitle && (
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 510,
            fontSize: '12px',
            lineHeight: '22px',
            color: '#a9a9a9',
            textAlign: 'center',
            letterSpacing: '-0.43px',
          }}
        >
          {subtitle}
        </p>
      )}
      {date && (
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 510,
            fontSize: '12px',
            lineHeight: '22px',
            color: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            letterSpacing: '-0.43px',
          }}
        >
          {date}
        </p>
      )}
      {count !== undefined && (
        <p
          style={{
            fontFamily: 'SF Pro',
            fontWeight: 510,
            fontSize: '12px',
            lineHeight: '22px',
            color: '#a9a9a9',
            textAlign: 'center',
            letterSpacing: '-0.43px',
          }}
        >
          {count}
        </p>
      )}
    </div>
  );
};

export default DictCard;

