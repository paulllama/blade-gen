import React from 'react';
import styled from 'styled-components'

const DaggerBase = styled.div`
  background: ${({ color }) => color};
  border-color: ${({ color }) => color};
  position: relative;
  z-index: 1;

	&:before {
    content: '';
    position: absolute;
    z-index: -1;
    border-style: solid;
    display: ${({ flatStart }) => flatStart ? 'none' : 'block'};
	}

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    border-style: solid;
	}
`

const VerticalDagger = styled(DaggerBase)`
  width: ${({ size }) => `${size}rem`};
  margin-top: ${({ width, flatStart }) => flatStart ? '0' : `${width}rem`};

  &:before {
    top: ${({ width }) => `-${width}rem`};
    left: 0;
    border-width: ${({ depth }) => `${depth}rem`} ${({ width }) => `${width}rem`};
    border-color: transparent ${({ color }) => color} ${({ color }) => color} transparent;
  }

  &:after {
    top: 100%;
    left: 0;
    border-width: ${({ depth }) => `${depth}rem`} ${({ width }) => `${width}rem`};
    border-color: ${({ color }) => color} transparent transparent ${({ color }) => color};
  }
`

const HorizontalDagger = styled(DaggerBase)`
  height: ${({ size }) => `${size}rem`};
  margin-left: ${({ width, flatStart }) => flatStart ? '0' : `${width}rem`};

  &:before {
    top: 0;
    left: ${({ width }) => `-${width}rem`};
    border-width: ${({ width }) => `${width}rem`} ${({ depth }) => `${depth}rem`};
    border-color: transparent ${({ color }) => color} ${({ color }) => color} transparent;
  }

  &:after {
    top: 0;
    left: 100%;
    border-width: ${({ width }) => `${width}rem`} ${({ depth }) => `${depth}rem`};
    border-color: ${({ color }) => color} transparent transparent ${({ color }) => color};
  }
`

const DaggerDiv = ({ color, direction, sizeInRem, flatStart, children }) => {
	const width = sizeInRem / 2
	const depth = sizeInRem / 4
	const DaggerType = direction === 'horizontal' ? HorizontalDagger : VerticalDagger

	return (
		<DaggerType
      flatStart={flatStart}
			color={color}
			size={sizeInRem}
			depth={depth}
			width={width}
		>
			{children}
		</DaggerType>
	)
}

export default DaggerDiv