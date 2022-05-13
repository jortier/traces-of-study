package com.example.springcalcuator.component;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DollarCalculator implements ICalculator {
    private int price = 1;
    private MarketApi marketApi;

    public void init(){
        this.price = marketApi.connect();
    }

    @Override
    public int sum(int x, int y) {
        x *= price;
        y *= price;
        return x + y;
    }

    @Override
    public int minus(int x, int y) {
        x *= price;
        y *= price;
        return x - y;
    }
}
