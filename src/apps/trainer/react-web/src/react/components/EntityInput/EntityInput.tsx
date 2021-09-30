import React from "react";
import { type } from "ramda";
import { Entity } from "@containers/Entity/Entity";

interface IEntity {
    _id?: string
    label: string
    start: number
    stop: number
}

export interface EntityInputProps {
    _id: string
    input: string
    entities: Array<IEntity>
    disable?: boolean
}

export const EntityInput = ({ _id, input, entities=[], disable=false }: EntityInputProps) => {
    entities = entities.sort((a, b) => a.start - b.start);

    const result: any = [];
    let diff = 0;

    entities.forEach(({ _id, label, start, stop }) => {
        const hasEntity = start - diff;

        if (hasEntity > 0)
            result.push(input.substring(diff, start));

        result.push([{
            text: input.substring(start, stop),
            _id,
            label,
            start,
            stop
        }]);

        diff = stop;
    });

    if (((input.length - 1) - diff) > 0)
        result.push(input.substring(diff, input.length));

    return (
        <>
            {disable
                ? (
                    <span>
                        {input}
                    </span>
                )
                : result.map((entity, idx) => (
                    <span key={idx}>
                        {type(entity) !== "Array"
                            ? entity
                            : (([ entity ]) => (
                                <Entity
                                    _id={_id}
                                    entity={entity}
                                    disable={disable}
                                />
                            ))(entity)
                        }
                    </span>
                ))
            }
        </>
    )
}