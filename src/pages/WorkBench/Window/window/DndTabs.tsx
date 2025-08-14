/*
 * Copyright 2023 OceanBase
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { Tabs } from "antd";
import { TabsProps } from "antd/lib/tabs";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DraggableTabNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-node-key": string;
}
const DraggableTabNode: React.FC<DraggableTabNodeProps> = ({
  className,
  ...props
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-node-key"],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "move",
    opacity: isDragging ? 0.5 : 1,
  };

  return React.cloneElement(props.children as React.ReactElement<any>, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

interface IDraggableTabsProps extends TabsProps {
  moveTabNode: (dragKey: string, hoverKey: string) => void;
}
export default (props: IDraggableTabsProps) => {
  const { moveTabNode, ...rest} = props;
  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      moveTabNode(active.id, over?.id);
    }
  };

  const renderTabBar = (props, DefaultTabBar) => {
    return (
      <DndContext
        sensors={[sensor]}
        onDragEnd={onDragEnd}
        collisionDetection={closestCenter}
      >
        <DefaultTabBar {...props}>
          {(node) => (
            <DraggableTabNode
              {...(node as React.ReactElement<DraggableTabNodeProps>).props}
              key={node.key}
            >
              {node}
            </DraggableTabNode>
          )}
        </DefaultTabBar>
      </DndContext>
    );
  };

  return <Tabs renderTabBar={renderTabBar} {...rest} />;
};
