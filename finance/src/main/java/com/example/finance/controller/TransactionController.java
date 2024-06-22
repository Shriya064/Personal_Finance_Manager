package com.example.finance.controller;

import com.example.finance.entity.Transaction;
import com.example.finance.serviceimpl.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public Map<String, Object> getTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        double balance = 1000;  // Starting balance for demonstration purposes
        double shopping = transactions.stream().filter(t -> "Shopping".equals(t.getCategory())).mapToDouble(Transaction::getSum).sum();
        double food = transactions.stream().filter(t -> "Food & Drink".equals(t.getCategory())).mapToDouble(Transaction::getSum).sum();
        double bills = transactions.stream().filter(t -> "Bills & Utilities".equals(t.getCategory())).mapToDouble(Transaction::getSum).sum();
        double others = transactions.stream().filter(t -> "Others".equals(t.getCategory())).mapToDouble(Transaction::getSum).sum();

        balance -= (shopping + food + bills + others);

        Map<String, Object> response = new HashMap<>();
        response.put("balance", balance);
        response.put("shopping", shopping);
        response.put("food", food);
        response.put("bills", bills);
        response.put("others", others);
        response.put("transactions", transactions);
        return response;
    }

    @PostMapping
    public Transaction addTransaction(@RequestBody Transaction transaction) {
        return transactionService.saveTransaction(transaction);
    }
}
